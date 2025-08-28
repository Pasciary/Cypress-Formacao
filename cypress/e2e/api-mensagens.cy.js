describe('API Adopet', () => {
    const tempoEsperado = Math.random() * 1000 // Test Flaky, é um teste que oscila, sem ser feito algo.
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmE3YTFjZC1lMTc2LTRmNTQtOWYyMS0zNjk4OTdiMjUzYzIiLCJhZG9wdGVyTmFtZSI6IkpvYXF1aW0gU2lsdmUiLCJpYXQiOjE3NTY0MjQwODcsImV4cCI6MTc1NjY4MzI4N30.v-3oqQ4cpkGglO1wJCBAyTHutmnxG2brE_O49uumwUI'

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/62a7a1cd-e176-4f54-9f21-369897b253c2',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
            expect(res.duration).to.be.lte(tempoEsperado) // usando o expect durantion com o tempoEsperado gera um Flaky Test.
        })

    })
})