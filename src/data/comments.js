import { v4 as uuid } from "uuid";

export const comments = [
    {
        id: uuid(),
        name: "Clueless-Kun",
        comment: "Dude thankyou so much for making this, now if only it ws possible to somehow get this to stay as the top discussion so that new people don't make these mistakes.",
        childrenComment: [
            {
                id: uuid(),
                name: "Nebuchadnezzar(AFTP)",
                comment: "Working on it. It will eventually be available on the side of all discusssions.",
                childrenComment:[]
            },
            {
                id: uuid(),
                name: "Nebuchadnezzar(AFTP)",
                comment: "It should be up now",
                childrenComment:[]
            }
        ]
    },
    {
        id: uuid(),
        name: "Tony Hue",
        comment: "If I could reccommend this discussion more than once, I would.",
        childrenComment: []
    },
]