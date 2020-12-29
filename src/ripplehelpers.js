export const fup = (x)=>{
    if (typeof x === "function"){
        return x;
    }
    return (i)=>x;
}