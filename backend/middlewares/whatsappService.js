import axios from "axios";

export const sendWhatsAppTemplate = async ({
    phoneNumber,
    templateName,
    language = "en",
    variables = []
}) => {
    try {
        const response = await axios.post(
            "https://backend.chatmitra.com/api/client/send_template",
            {
                templateName,
                language,
                phoneNumber,
                components: [
                    {
                        type: "body",
                        parameters: variables.map(value => ({
                            type: "text",
                            text: value
                        }))
                    }
                ]
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.CHATMINTRA_TOKEN}`
                }
            }
        );

        return response.data;
    } catch (error) {
        console.error(
            "WhatsApp Error:",
            error.response?.data || error.message
        );
        throw error;
    }
};
