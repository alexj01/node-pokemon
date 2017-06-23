const request = require('request')
const rp = require('request-promise-native')
const api = 'http://localhost:3000/versionGroups'

function getVersionGroups(uri) {
    return {
        uri,
        resolveWithFullResponse: true
    }
}


describe('GET all version-groups', () => {

    it('returns 200', (done) => {
        rp(getVersionGroups(api), (err, res, body) => {
                expect(res.statusCode).toBe(200)
                done()
            })
            .catch(err => {
                this.fail(err.message)
                done()
            })
    });

    it('returns all version groups in the database', (done) => {
        rp(getVersionGroups(api), (err, res, body) => {
                expect(JSON.parse(body).versionGroups.length).toEqual(4)
                done()
            })
            .catch(err => {
                this.fail(err.message)
                done()
            })
    });


});