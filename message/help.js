exports.menu = (prefix, i) => {
    return `*DevN*
`
}

exports.newMenu = (ucapan, ownerName, botName, prefix, pendaftar, runtime, pushname, isOwner, isPremium, sisalimit, limitCount, glimit, gcount, expired, tanggal, jam) => {
    return `*${ucapan.data.result} ${pushname} !*
*Hi! Ini adalah fitur pada AsunaBot✨*

Link Grup AsunaBot : https://chat.whatsapp.com/FVZnY98BQno5tbhw5KnQ6K
Masuk ke grup untuk mendapatkan hak akses lebih!

    - *Prefix : 「 ${prefix} 」*
    - *Total Pengguna : ${pendaftar.length}*
    - *Tanggal : ${tanggal}*
    - *Pukul : ${jam}*
    - *Runtime Bot* : *${runtime}*

═══ 《 *User Info* 》 ═══
    - *Name* : *${pushname}*
    - *Status* : *${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}*
    - *Limit* : *${isPremium ? 'Unlimited' : `${sisalimit}/${limitCount}`}*
    - *Limit Game* : *${isOwner ? 'Unlimited' : `${glimit}/${gcount}`}*
    - *Expired Prem : ${isOwner ? '-' : isPremium ? expired : 'Not Premium'}*


═══ 《 *Menu* 》 ═══
-⌛ *${prefix}stickermenu*
-⌛ *${prefix}creatormenu*
-⌛ *${prefix}groupmenu*
-☀ *${prefix}sistemmenu*
-☀ *${prefix}gabutmenu*
-☀ *${prefix}gamemenu*
-✙ *${prefix}downloadmenu*
-✙ *${prefix}searchmenu*
-✙ *${prefix}stalkmenu*
-❐ *${prefix}randommenu*
-❐ *${prefix}animemenu*
-❐ *${prefix}nsfwmenu*
-☂ *${prefix}toolsmenu*
-☂ *${prefix}makermenu*
-☂ *${prefix}storagemenu*
-✎ *${prefix}othermenu*
`}

exports.stickerMenu = (prefix, ownerName) => {
    return `
═══ 《 *Sticker Menu* 》 ═══
-✎ *${prefix}sticker*
-✎ *${prefix}stickergif*
-✎ *${prefix}swm*
-✎ *${prefix}take*
-✎ *${prefix}toimg*
-✎ *${prefix}tovideo*
-✎ *${prefix}attp*
`
}

exports.ownerMenu = (prefix, ownerName) => {
    return `
═══ 《 *Owner Menu* 》 ═══
-☂ *${prefix}addprem*
-☂ *${prefix}delprem*
-☂ *${prefix}ban*
-☂ *${prefix}unban*
-☂ *${prefix}join*
-☂ *${prefix}addbaword*
-☂ *${prefix}delbaword*
-☂ *${prefix}addchangelog*
-☂ *${prefix}public*
-☂ *${prefix}self*
-☂ *${prefix}exif*
-☂ *${prefix}bc*
-☂ *${prefix}setprefix*
-☂ *${prefix}setthumb*
-☂ *${prefix}clearall*
-☂ *${prefix}>*
-☂ *${prefix}$*
`
}

exports.groupMenu = (prefix, ownerName) => {
    return `
═══ 《 *Group Menu* 》 ═══
-❐ *${prefix}afk*
-❐ *${prefix}infogrup*
-❐ *${prefix}add*
-❐ *${prefix}kick*
-❐ *${prefix}promote*
-❐ *${prefix}demote*
-❐ *${prefix}linkgc*
-❐ *${prefix}leave*
-❐ *${prefix}setdesc*
-❐ *${prefix}setgrupname*
-❐ *${prefix}setppgrup*
-❐ *${prefix}opengrup*
-❐ *${prefix}closegrup*
-❐ *${prefix}tagall*
-❐ *${prefix}tagme*
-❐ *${prefix}kontak*
-❐ *${prefix}hidetag*
-❐ *${prefix}getpp*
-❐ *${prefix}mute*
-❐ *${prefix}unmute*
`
}

exports.sistemMenu = (prefix, ownerName) => {
    return `
═══ 《 *System Menu* 》 ═══
-✙ *${prefix}antilink*
-✙ *${prefix}antiwame*
-✙ *${prefix}antibadword*
-✙ *${prefix}welcome*
-✙ *${prefix}left*
`
}

exports.gabutMenu = (prefix, ownerName) => {
    return `
═══ 《 *Gabut Menu* 》 ═══
-☀ *${prefix}apakah*
-☀ *${prefix}bisakah*
-☀ *${prefix}kapankah*
-☀ *${prefix}hobby*
-☀ *${prefix}rate*
-☀ *${prefix}cekbapak*
-☀ *${prefix}seberapagay*
-☀ *${prefix}truth*
-☀ *${prefix}dare*
`
}

exports.gameMenu = (prefix, ownerName) => {
    return `
═══ 《 *Game Menu* 》 ═══
-⌛ *${prefix}tictactoe*
-⌛ *${prefix}delttt*
-⌛ *${prefix}tebakgambar*
-⌛ *${prefix}family100*
-⌛ *${prefix}suit*
`
}

exports.downloadMenu = (prefix, ownerName) => {
    return `
═══ 《 *Download Menu* 》 ═══
-✔️ *${prefix}ytmp3*
-✔️ *${prefix}ytmp4*
-✔️ *${prefix}play*
-✔️ *${prefix}playmp4*
-✔️ *${prefix}tiktok*
-✔️ *${prefix}tiktokmp3*
-✔️ *${prefix}instagram*
-✔️ *${prefix}facebook*
`
}

exports.searchMenu = (prefix, ownerName) => {
    return `
═══ 《 *Search Menu* 》 ═══
-✔️ *${prefix}yts*
-✔️ *${prefix}pinterest*
`
}

exports.stalkMenu = (prefix, ownerName) => {
    return `
═══ 《 *Stalk Menu* 》 ═══
-✎ *${prefix}igstalk*
-✎ *${prefix}ghstalk*
`
}

exports.randomMenu = (prefix, ownerName) => {
    return `
═══ 《 *Random Menu* 》 ═══
-✎ *${prefix}quotes*
-✎ *${prefix}darkjokes
-✎ *${prefix}pantun
-✎ *${prefix}bucin
-✎ *${prefix}cehor
-✎ *${prefix}fakta
-✎ *${prefix}katabijak
-✎ *${prefix}motivasi
`
}

exports.animeMenu = (prefix, ownerName) => {
    return `
═══ 《 *Anime Menu* 》 ═══
-☂ *${prefix}waifu*
-☂ *${prefix}loli*
-☂ *${prefix}husbu*
-☂ *${prefix}shota*
-☂ *${prefix}nekonime*
-☂ *${prefix}megumin*
-☂ *${prefix}sagiri*
-☂ *${prefix}shinobu*
`
}

exports.toolsMenu = (prefix, ownerName) => {
    return `
═══ 《 *Tools Menu* 》 ═══
-❐ *${prefix}nulis*
-❐ *${prefix}nuliskiri*
-❐ *${prefix}nuliskanan*
-❐ *${prefix}foliokiri*
-❐ *${prefix}foliokanan*
-❐ *${prefix}tinyurl*
-❐ *${prefix}translate*
-❐ *${prefix}ebase64*
-❐ *${prefix}debase64*
-❐ *${prefix}ehex*
-❐ *${prefix}dehex*
-❐ *${prefix}ebinary*
-❐ *${prefix}debinary*
`
}

exports.makerMenu = (prefix, ownerName) => {
    return `
═══ 《 *Maker Menu* 》 ═══
-✙ *${prefix}hartatahta*
-✙ *${prefix}neon*
-✙ *${prefix}matrix*
-✙ *${prefix}blackpink*
-✙ *${prefix}halloween*
-✙ *${prefix}thundername*
-✙ *${prefix}devilwings*
-✙ *${prefix}cloudtext*
-✙ *${prefix}bloodtext*
-✙ *${prefix}bloodtext2*
-✙ *${prefix}steeltext*
-✙ *${prefix}lavatext*
-✙ *${prefix}toxiclogo*
-✙ *${prefix}dropwater*
-✙ *${prefix}metaldark*
-✙ *${prefix}sandwrite*
-✙ *${prefix}3dwater*
-✙ *${prefix}graffiti*
-✙ *${prefix}graffiti2*
-✙ *${prefix}phlogo*
-✙ *${prefix}glitch*
-✙ *${prefix}graffiti3*
-✙ *${prefix}layeredtext*
-✙ *${prefix}vintage*
-✙ *${prefix}3dspace*
-✙ *${prefix}stonetext*
-✙ *${prefix}avengers*
-✙ *${prefix}marvellogo*
-✙ *${prefix}3dmetal*
-✙ *${prefix}lionlogo*
-✙ *${prefix}wolflogo*
-✙ *${prefix}ninjalogo*
-✙ *${prefix}pubglogo*
-✙ *${prefix}shadowtext*
-✙ *${prefix}smoketext*
-✙ *${prefix}romancetext*
-✙ *${prefix}carvedwood*
-✙ *${prefix}harrypotter*
-✙ *${prefix}flamingtext*
-✙ *${prefix}falleaves*
-✙ *${prefix}underwater*
-✙ *${prefix}wolfmetal*
-✙ *${prefix}woodboard*
-✙ *${prefix}undergrass*
-✙ *${prefix}coffetext*
-✙ *${prefix}lovetext*
-✙ *${prefix}burnpaper*
-✙ *${prefix}lovemessage*
`
}

exports.otherMenu = (prefix, ownerName) => {
    return `
═══ 《 *Other Menu* 》 ═══
-☀ *cekprefix*
-☀ *${prefix}stats*
-☀ *${prefix}limit*
-☀ *${prefix}balance*
-☀ *${prefix}runtime*
-☀ *${prefix}speed*
-☀ *${prefix}owner*
-☀ *${prefix}donasi*
-☀ *${prefix}sourcecode*
-☀ *${prefix}cekprem*
-☀ *${prefix}listprem*
-☀ *${prefix}listban*
-☀ *${prefix}listbadword*
-☀ *${prefix}buylimit*
-☀ *${prefix}buyglimit*
-☀ *${prefix}topglobal*
-☀ *${prefix}toplocal*
-☀ *${prefix}readmore*
`
}

exports.hentaiMenu = (prefix, ownerName) => {
    return `
═══ 《 *18+ Menu* 》 ═══
-⌛ *${prefix}randomhentong*
-⌛ *${prefix}kemonomimi*
-⌛ *${prefix}ero*
-⌛ *${prefix}echi*
-⌛ *${prefix}ahegao*
-⌛ *${prefix}trap*
-⌛ *${prefix}neko*
-⌛ *${prefix}blowjob*
-⌛ *${prefix}kitsune*
-⌛ *${prefix}yuri*
-⌛ *${prefix}boobs*
-⌛ *${prefix}kuni*
`
}

exports.storageMenu = (prefix, ownerName) => {
    return `
═══ 《 *Entahlah :v* 》 ═══
-⌛ *${prefix}sound*
`
}
