window.addEventListener('load', async () => {
    const resp = await fetch('public/img/PA_MCD_COMBOS_DOBLES_POLLO_V_Combos_01.json')
    const data = await resp.json()

    /**
     * @type {HTMLCanvasElement}
     */

    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = data.tags[0].timelines[0].color
    ctx.font = `${data.tags[0].timelines[0].fontSize}px sans-serif`
    ctx.fillText(data.tags[0].debugPrice, data.tags[0].timelines[0].position.y, data.tags[0].timelines[0].position.x)
    console.log(data)
})