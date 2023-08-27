import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import { useState } from "react";

export function Signup({ onSelect }: { onSelect: (email: string, password: string) => Promise<void> }) {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    return <div>
        <div style={{
            paddingTop: 150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center"
        }}>
            <Typography variant={"h6"}>
                Welcome to Coursera. Sign up below
            </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Card variant={"outlined"} style={{ width: 400, padding: 20 }}>
                <TextField
                    onChange={(evant11) => {
                        let elemt = evant11.target;
                        setEmail(elemt.value);
                    }}
                    fullWidth={true}
                    label="Email"
                    variant="outlined"
                />
                <br /><br />
                <TextField
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    fullWidth={true}
                    label="Password"
                    variant="outlined"
                    type={"password"}
                />
                <br /><br />

                <Button
                    size={"large"}
                    variant="contained"
                    onClick={async () => {
                        onSelect(email, password);
                    }}

                > Signup</Button>
            </Card>
        </div>
    </div>
}

export default Signup;