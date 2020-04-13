const os = require('os')
const log = require('./logger')

setInterval(() => {
    const { freemem, totalmem } = os

    const total = parseInt(totalmem() / 1024 / 1024)
    const mem = parseInt(freemem() / 1024 / 1024)
    const percents = parseInt((mem / total) * 100)

    const stats = {
        freemem: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents} %`
    }

    console.clear()
    console.log('========================');
    console.log('========PC STATS========');
    console.log('========================');
    console.table(stats);
    if (parseInt(stats.usage) < 40) {
        console.log('Melhor comprar mais memória');
    }

    log(`${JSON.stringify(stats)}\n`)

}, 1000)
