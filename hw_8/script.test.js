// const { describe } = require('yargs');
var { tickets, getQuntityPostsByAuthor, complexFunction } = require('./script');

describe('tickets', function() {
    it('should be defined', function() {
        expect(tickets).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof tickets).toBe('function')
    })
    test.each([
        [[25, 25, 50], `Yes`],
        [[25, 50, 100], `No`],
        [[`25`, `25`, `50`, `100`], `Yes`],
        [[`25`, `50`, `100`], `No`],
    ])(`testing %s with expected result %s`, function (arg1, result) {
        expect(tickets(arg1)).toBe(result)
    })
    test.each([
        [[25, 25, 50], `No`],
        [[25, 50, 100], `Yes`],
        [[`25`, `25`, `50`, `100`], `No`],
        [[`25`, `50`, `100`], `Yes`],
    ])(`testing %s with expected result %s`, function (arg1, result) {
        expect(tickets(arg1)).not.toBe(result)
    })
})
describe('getQuntityPostsByAuthor', function() {
    it('should be defined', function() {
        expect(getQuntityPostsByAuthor).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof getQuntityPostsByAuthor).toBe('function')
    })
    test.each([
        [[{ // 0
                id: 1,
                post: 'some post1',
                title: 'title 1',
                author: 'Ivanov',
                comments: [
                    {
                        id: 1.1,
                        comment: 'some comment1',
                        title: 'title 1',
                        author: 'Rimus'
                    },
                    {
                        id: 1.2,
                        comment: 'some comment2',
                        title: 'title 2',
                        author: 'Uncle'
                    }
                ]
            },
            { // 1
                id: 2,
                post: 'some post2',
                title: 'title 2',
                author: 'Ivanov',
                comments: [
                    {
                        id: 1.1,
                        comment: 'some comment1',
                        title: 'title 1',
                        author: 'Rimus'
                    },
                    {
                        id: 1.2,
                        comment: 'some comment2',
                        title: 'title 2',
                        author: 'Uncle'
                    },
                    {
                        id: 1.3,
                        comment: 'some comment3',
                        title: 'title 3',
                        author: 'Rimus'
                    }
                ]
            },
            { // 2
                id: 3,
                post: 'some post3',
                title: 'title 3',
                author: 'Rimus'
            },
            { // 3
                id: 4,
                post: 'some post4',
                title: 'title 4',
                author: 'Uncle'
        }], 'Rimus', { post: 1, comment: 3}],
        [[{ // 0
            id: 1,
            post: 'some post1',
            title: 'title 1',
            author: 'Ivanov',
            comments: [
                {
                    id: 1.1,
                    comment: 'some comment1',
                    title: 'title 1',
                    author: 'Rimus'
                },
                {
                    id: 1.2,
                    comment: 'some comment2',
                    title: 'title 2',
                    author: 'Uncle'
                }
            ]
            },
            { // 1
                id: 2,
                post: 'some post2',
                title: 'title 2',
                author: 'Ivanov',
                comments: [
                    {
                        id: 1.1,
                        comment: 'some comment1',
                        title: 'title 1',
                        author: 'Rimus'
                    },
                    {
                        id: 1.2,
                        comment: 'some comment2',
                        title: 'title 2',
                        author: 'Uncle'
                    },
                    {
                        id: 1.3,
                        comment: 'some comment3',
                        title: 'title 3',
                        author: 'Rimus'
                    }
                ]
            },
            { // 2
                id: 3,
                post: 'some post3',
                title: 'title 3',
                author: 'Rimus'
            },
            { // 3
                id: 4,
                post: 'some post4',
                title: 'title 4',
                author: 'Uncle'
        }], 'Uncle', { post: 1, comment: 2}],            
        [[{ // 0
            id: 1,
            post: 'some post1',
            title: 'title 1',
            author: 'Ivanov',
            comments: [
                {
                    id: 1.1,
                    comment: 'some comment1',
                    title: 'title 1',
                    author: 'Rimus'
                },
                {
                    id: 1.2,
                    comment: 'some comment2',
                    title: 'title 2',
                    author: 'Uncle'
                }
            ]
        },
        { // 1
            id: 2,
            post: 'some post2',
            title: 'title 2',
            author: 'Ivanov',
            comments: [
                {
                    id: 1.1,
                    comment: 'some comment1',
                    title: 'title 1',
                    author: 'Rimus'
                },
                {
                    id: 1.2,
                    comment: 'some comment2',
                    title: 'title 2',
                    author: 'Uncle'
                },
                {
                    id: 1.3,
                    comment: 'some comment3',
                    title: 'title 3',
                    author: 'Rimus'
                }
            ]
        },
        { // 2
            id: 3,
            post: 'some post3',
            title: 'title 3',
            author: 'Rimus'
        },
        { // 3
            id: 4,
            post: 'some post4',
            title: 'title 4',
            author: 'Uncle'
        }], 'Ivanov', { post: 2, comment: 0}],
    ])(`testing %s and %s with expected result %s`, function (arg1, arg2, result) {
        expect(getQuntityPostsByAuthor(arg1, arg2)).toStrictEqual(result)
    })
    test.each([
        [[{ // 0
            id: 1,
            post: 'some post1',
            title: 'title 1',
            author: 'Ivanov',
            comments: [
                {
                    id: 1.1,
                    comment: 'some comment1',
                    title: 'title 1',
                    author: 'Rimus'
                },
                {
                    id: 1.2,
                    comment: 'some comment2',
                    title: 'title 2',
                    author: 'Uncle'
                }
            ]
        },
        { // 1
            id: 2,
            post: 'some post2',
            title: 'title 2',
            author: 'Ivanov',
            comments: [
                {
                    id: 1.1,
                    comment: 'some comment1',
                    title: 'title 1',
                    author: 'Rimus'
                },
                {
                    id: 1.2,
                    comment: 'some comment2',
                    title: 'title 2',
                    author: 'Uncle'
                },
                {
                    id: 1.3,
                    comment: 'some comment3',
                    title: 'title 3',
                    author: 'Rimus'
                }
            ]
        },
        { // 2
            id: 3,
            post: 'some post3',
            title: 'title 3',
            author: 'Rimus'
        },
        { // 3
            id: 4,
            post: 'some post4',
            title: 'title 4',
            author: 'Uncle'
    }], 'Rimus', { post: 1, comment: 2}, { post: 2, comment: 0}],
    [[{ // 0
        id: 1,
        post: 'some post1',
        title: 'title 1',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            }
        ]
        },
        { // 1
            id: 2,
            post: 'some post2',
            title: 'title 2',
            author: 'Ivanov',
            comments: [
                {
                    id: 1.1,
                    comment: 'some comment1',
                    title: 'title 1',
                    author: 'Rimus'
                },
                {
                    id: 1.2,
                    comment: 'some comment2',
                    title: 'title 2',
                    author: 'Uncle'
                },
                {
                    id: 1.3,
                    comment: 'some comment3',
                    title: 'title 3',
                    author: 'Rimus'
                }
            ]
        },
        { // 2
            id: 3,
            post: 'some post3',
            title: 'title 3',
            author: 'Rimus'
        },
        { // 3
            id: 4,
            post: 'some post4',
            title: 'title 4',
            author: 'Uncle'
    }], 'Uncle', { post: 1, comment: 3}, { post: 2, comment: 0}],            
    [[{ // 0
        id: 1,
        post: 'some post1',
        title: 'title 1',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            }
        ]
    },
    { // 1
        id: 2,
        post: 'some post2',
        title: 'title 2',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            },
            {
                id: 1.3,
                comment: 'some comment3',
                title: 'title 3',
                author: 'Rimus'
            }
        ]
    },
    { // 2
        id: 3,
        post: 'some post3',
        title: 'title 3',
        author: 'Rimus'
    },
    { // 3
        id: 4,
        post: 'some post4',
        title: 'title 4',
        author: 'Uncle'
    }], 'Ivanov', { post: 1, comment: 3}, { post: 1, comment: 2}],
    ])(`testing %s and %s with expected result neither %s nor %s`, function (arg1, result) {
        expect(getQuntityPostsByAuthor(arg1)).not.toBe(result)
    })
})
describe('complexFunction', function() {
    it('should be defined', function() {
        expect(complexFunction).toBeDefined()
    })
    it('should be function', function() {
        expect(typeof complexFunction).toBe('function')
    })
    test.each([
        [`photo`, `download photo`],
        [`foo`, `download foo`],
        [`boo`, `download boo`],
    ])(`testing %s with expected result %s`, function (arg1, result) {
        let x = complexFunction(arg1);
        expect(x(arg1)).toBe(result)
    })
    test.each([
        [`photo`, `downloading \"download photo\" from cache`],
        [`photo`, `download photo`],
        [`foo`, `downloading \"download foo\" from cache`],
        [`boo`, `downloading \"download boo\" from cache`],
    ])(`testing %s with expected result %s`, function (arg1, result) {
        expect(complexFunction(arg1)).not.toBe(result)
    })
})