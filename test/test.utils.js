//find by Attributes
//example const incrementButton = wrapper.find("[data-test='name']")
//writing the reusable code

export const findByTestArr=(wrapper, val)=>{
        return wrapper.find(`[data-test='${val}']`)
}