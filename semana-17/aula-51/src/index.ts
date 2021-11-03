import { config } from "dotenv"
import app from "./app"
import { transporter } from "./services/mailTransporter"
import { addAddressUser } from "./endpoints/addAdressUser"

config()

app.post('/users/address/:id', addAddressUser)


