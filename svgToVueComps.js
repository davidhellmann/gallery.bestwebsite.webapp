const path = require('path')
const fs = require('fs')
const glob = require('glob')

const srcDir = path.resolve(path.join(process.cwd(), 'assets', 'images/svg'))
const distDir = path.resolve(path.join(process.cwd(), 'components', 'svg/'))

function readSVG(file) {
  return fs.readFileSync(file, 'utf-8')
}

function convertToVue(content, name) {
  return `<template>
  ${content}</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: '${name}',
})
</script>
`
}

function writeFile(content, name) {
  const fullFilePath = `${distDir}${name}.vue`
  const fullFilePathWithoutFile = fullFilePath.substring(
    0,
    fullFilePath.lastIndexOf('/') + 1
  )

  if (!fs.existsSync(fullFilePathWithoutFile)) {
    fs.mkdirSync(fullFilePathWithoutFile)
  }

  fs.writeFileSync(`${fullFilePath}`, content)
  console.log(`File created: ${name}`)
}

function readAndWrite() {
  const svgFiles = glob.sync(srcDir + '**/**/*.svg')
  svgFiles.forEach((file) => {
    const filePath = path.dirname(file)
    const iconDir = filePath.split(srcDir)[1]

    const fileContent = readSVG(file)

    const componentName = path.basename(file, '.svg')
    const componentNameCapitalized = `Svg${
      componentName.charAt(0).toUpperCase() + componentName.slice(1)
    }`
    const vueContent = convertToVue(fileContent, componentNameCapitalized)
    writeFile(vueContent, `${iconDir}/${componentNameCapitalized}`)
  })
}

readAndWrite()
