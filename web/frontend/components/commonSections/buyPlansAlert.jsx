import { Button, Text } from "@shopify/polaris"
import { Card } from "antd"
import { useNavigate } from "react-router-dom"

export const BuyPlanAlert = () =>{
    const navigate = useNavigate()
    return(
        <Card>
            <Text>Please Upgrade your plan</Text>
            <div className="sd-bundle-upgrade-btn">
                <Button onClick={()=>navigate("/plans")}>Upgrade Plan</Button>
            </div>
        </Card>
    )
}