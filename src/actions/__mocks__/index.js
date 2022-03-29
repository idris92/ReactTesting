//Mocking the action module(for useEfect)
module.exports = {
    ...jest.requireActual('..'),
    __esModule:true,
    getSecretWord: jest.fn().mockReturnValue(Promise.resolve('party')),
}