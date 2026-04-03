const LoginForm = () => {

    const styled = {
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh"
        },
        form: {
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            padding: "30px",
            width: "320px",
            borderRadius: "10px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            backgroundColor: "#ffffff"
        },
        title: {
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "10px"
        },
        input: {
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "14px"
        },
        button: {
            padding: "10px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#0d6efd",
            color: "white",
            fontSize: "16px",
            cursor: "pointer"
        }
    }

    return (
        <div style={styled.container}>
            <form style={styled.form}>
                <div style={styled.title}>Login</div>

                <input 
                    type="text" 
                    placeholder="Username"
                    style={styled.input}
                />

                <input 
                    type="email" 
                    placeholder="Email"
                    style={styled.input}
                />

                <input 
                    type="password" 
                    placeholder="Password"
                    style={styled.input}
                />

                <button style={styled.button}>
                    Login
                </button>

            </form>
        </div>
    );
};

export default LoginForm;
