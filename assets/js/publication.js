function morePublication() {
    const button = document.querySelector('.publications-grid__more-button')
    const hide = document.querySelector('.publications-grid__more')
    const elChangeHight = document.querySelector('.publications-grid')
    const hFieldOfView = document.querySelector('.publications-grid').clientHeight
    let counter = hFieldOfView

    function openMorePublications() {
        const hFull = document.querySelector('.publications-grid').scrollHeight
        counter += 400

        elChangeHight.style.height = counter + `px`

        window.scrollBy(
            {
                left: 0,
                top: counter,
                behavior: "smooth"
            })

        if (counter >= hFull) {
            hide.style.display = "none"
            elChangeHight.style.height = "auto"
        }
    }

    button.addEventListener('click', () => { openMorePublications() })
}
morePublication()



function companyProducts() {
    const btnMore = document.querySelector('.publication-company__more-bnt')
    const publicationCompany = document.querySelector('.publication-company__products')
    const anchor = document.querySelector('.publication')

    let skip = 0

    async function getData(link, calback, ...arguments) {
        try {
            let response = await fetch(link)
            let result = await response.json()
            calback(result, ...arguments)
        } catch (err) {
            console.log(err)
        }
    }

    getData('https://dummyjson.com/products?limit=6', fillProducts, publicationCompany)

    function createProducts(product) {
        const container = document.createElement('article')
        container.classList.add('publication-company__product')
        container.innerHTML = `
    <h3 class="publication-company__product-title">${product.title}</h3>

    <div class="publication-company__product-picture">
    <img class="publication-company__product-image" src="${product.thumbnail}" alt="${product.title}">
    </div>
   
    <p class="publication-company__product-description">${product.description}</p>
    <p class="publication-company__product-price">${product.price} грн</p>
        `
        return container
    }

    function fillProducts(catalog, parentContainer) {
        catalog.products.forEach(el => {
            parentContainer.appendChild(createProducts(el))
        });
    }

    btnMore.addEventListener('click', () => {
        skip += 6;
        const linkMore = `https://dummyjson.com/products?skip=${skip}&limit=6`
        getData(linkMore, fillProducts, publicationCompany)
    })
}
companyProducts()



function togglePublication() {
    const btnNews = document.querySelector('[data-action="news"]')
    const btnCompany = document.querySelector('[ data-action="company"]')
    const publicationCompany = document.querySelector('.publication-company')
    const publicationNews = document.querySelector('.publications-grid')

    btnNews.addEventListener('click', () => {
        publicationCompany.classList.remove('active')
        publicationNews.classList.add('active')

        btnCompany.classList.remove('active')
        btnNews.classList.add('active')
    })

    btnCompany.addEventListener('click', () => {
        publicationNews.classList.remove('active')
        publicationCompany.classList.add('active')

        btnNews.classList.remove('active')
        btnCompany.classList.add('active')
    })
}
togglePublication()



