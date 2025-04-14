const search = document.querySelector(".search_natives")
const results = document.querySelector(".results")
const body = document.querySelector("body")
const sideClient = document.querySelector(".client")
const sideServer = document.querySelector(".server")
const sideShared = document.querySelector(".shared")
const stateBags = document.querySelector(".stateBags")
const sideEvent = document.querySelector(".event")
let side = "client"
let markdown;

async function getNatives() {
    const natives = await fetch("/natives.json").then(response => response.json()).then(data => data)
    let table = []
    let path = []
    for (const key in natives) {
        for (const index in natives[key]) {
            for (const k in natives[key][index]) {
                let native = natives[key][index][k]
                if (native.type === side) {
                    table.push(native.name)
                    path.push({[native.name]: native.path})
                }
            }
        }
    }

    return [table, path]
}

sideEvent.addEventListener("click", () => {
    side = "event"
    search.value = ""
    results.innerHTML = ""
    if (markdown) {
        markdown.innerHTML = ""
        body.removeChild(markdown)
    }
})
sideClient.addEventListener("click", () => {
    side = "client"
    search.value = ""
    results.innerHTML = ""
    if (markdown) {
        markdown.innerHTML = ""
        body.removeChild(markdown)
    }
})
sideServer.addEventListener("click", () => {
    side = "server"
    search.value = ""
    results.innerHTML = ""
    if (markdown) {
        markdown.innerHTML = ""
        body.removeChild(markdown)
    }
})
sideShared.addEventListener("click", () => {
    side = "shared"
    search.value = ""
    results.innerHTML = ""
    if (markdown) {
        markdown.innerHTML = ""
        body.removeChild(markdown)
    }
})
stateBags.addEventListener("click", () => {
    side = "stateBags"
    search.value = ""
    results.innerHTML = ""
    if (markdown) {
        markdown.innerHTML = ""
        body.removeChild(markdown)
    }
})

search.addEventListener("input", async () => {
    const [natives, path] = await getNatives()

    const item = search.value.toLowerCase()
    results.innerHTML = ""

    if (item === "") return

    const filterItem = natives.filter(data => 
        data.toLowerCase().includes(item)
    )

    filterItem.forEach(value => {
        const element = document.createElement("p")
        element.className = "results_item"
        element.innerHTML = value
        results.appendChild(element)
    
        element.addEventListener('click', async (event) => {
            let mdPath
            for (const key in path) {
                if (path[key][event.target.innerHTML]) {
                    mdPath = path[key][event.target.innerHTML]
                }
            }

            const element = document.createElement("div")
            await fetch(`content${mdPath}`).then(response => response.text()).then(data => {
                if (markdown) {
                    body.removeChild(markdown)
                    markdown.innerHTML = ""
                }
                markdown = element
                markdown.className = "item_md"
                markdown.innerHTML = marked.parse(data)
                body.appendChild(markdown)
            })
        })
    })
})