const loginFields=[
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    }
]

const signupFields=[
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        // isRequired:true,
        placeholder:"Username"   
    },

    {
        labelText:"address",
        labelFor:"address",
        id:"address",
        name:"address",
        type:"text",
        autoComplete:"address",
        // isRequired:true,
        placeholder:"Address"   
    },

    {
        labelText:"telephone",
        labelFor:"telephone",
        id:"tel",
        name:"tel",
        type:"text",
        autoComplete:"tel",
        // isRequired:true,
        placeholder:"telephone "   
    },

    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        // isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        // isRequired:true,
        placeholder:"Password"   
    },
    {
        labelText:"Confirm Password",
        labelFor:"confirm-password",
        id:"confirm-password",
        name:"confirmpassword",
        type:"password",
        autoComplete:"confirm-password",
        // isRequired:true,
        placeholder:"Confirm Password"   
    },
]

export {loginFields,signupFields}