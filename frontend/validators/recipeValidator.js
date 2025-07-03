
const recipeValidator = {

    checkName: (name) => {
        if (!/^[א-ת]/i.test(name))
            throw new Error('invalid name')
        return true;
        },
    checkLevel:(level) => {
            if(level != "easy" && level !="medium" && level != "hard")
                throw new Error ('invalid level')
            return true;
        },
    checkType:(type) => {
            if(type != "בשרי" && type !="חלבי" && type != "פרווה")
                throw new Error ('invalid type')
            return true;
        },
}
export default recipeValidator

