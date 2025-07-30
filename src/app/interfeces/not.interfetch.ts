
export interface INotes{
    title : string,
    conten : string,
    category :  "personal" | "work" | "study" | "others",

    pinned : boolean,
    tags : {
        label : string,
        color : string
    }
}