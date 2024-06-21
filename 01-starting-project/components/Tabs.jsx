export default function Tabs({children, buttons, buttonsContainer = "menu"}){
    //setting a default value to the prop 
    const ButtonsContainer = buttonsContainer 

    return <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
}