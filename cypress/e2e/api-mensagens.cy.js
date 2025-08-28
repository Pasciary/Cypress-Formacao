describe('API Adopet', () => {
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmE3YTFjZC1lMTc2LTRmNTQtOWYyMS0zNjk4OTdiMjUzYzIiLCJhZG9wdGVyTmFtZSI6IkpvYXF1aW0gU2lsdmUiLCJpYXQiOjE3NTY0MjIxMDgsImV4cCI6MTc1NjY4MTMwOH0.DwpBES0d2UI0TWss0DwfKhnY5W-hgfXmTSzefeyhQTc'

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/62a7a1cd-e176-4f54-9f21-369897b253c2',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })

    })
})