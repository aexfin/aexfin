import { NextRequest, NextResponse, userAgent } from 'next/server'

interface UserAgentDetails {
  browser: {
    name: string;
    version: string;
  };
  cpu: string;
  device: {
    type: string;
    model: string;
    vendor: string;
  };
  engine: {
    name: string;
    version: string;
  };
  isBot: boolean | string;
  os: {
    name: string;
    version: string;
  };
}

export function middleware(request: NextRequest) {
    const ua = userAgent(request);
    const userAgentDetails: UserAgentDetails = {
        browser: {
            name: ua?.browser?.name || "Unknown",
            version: ua?.browser?.version || "Unknown",
        },
        cpu: ua?.cpu?.architecture || "Unknwon",
        device: {
            type: ua.device?.type || 'Unknown',
            model: ua.device?.model || 'Unknown',
            vendor: ua.device?.vendor || 'Unknown',
        },
        engine: {
            name: ua?.engine?.name || "Unknown",
            version: ua?.engine?.version || "Unknown",
        },
        isBot: ua?.isBot?.valueOf() || "Unknown",
        os: {
            name: ua.os?.name || 'Unknown',
            version: ua.os?.version || "Unknown",
        }
    };
    postWebhook(userAgentDetails);

    return NextResponse.next();
}

const discord_webhook: any = process.env.DISCORD_WEBHOOK;

export const postWebhook = async (
    ua: UserAgentDetails,
) => {
    const json = {
        username: "aexfin-web-user-agent-logs",
        avatar_url: "https://github.com/aexfin.png",
        embeds: [
            {
                description: `**Browser**\n> \`Name:\` ${ua.browser.name}\n> \`Version:\` ${ua.browser.version}\n**CPU: **${ua.cpu}\n**Device**\n> \`Type:\` ${ua.device.type}\n> \`Model:\` ${ua.device.model}\n> \`Vendor:\` ${ua.device.vendor}\n**Engine**\n> \`Name:\` ${ua.engine.name}\n> \`Version:\` ${ua.engine.version}\n**is Bot?: **${ua.isBot}\n**OS**\n> \`Name:\` ${ua.os.name}\n> \`Version:\` ${ua.os.version}`,
                color: 3553599
            }
        ]
    };

    try {
        const response = await fetch(discord_webhook, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json),
        });
    } catch (error) {
        console.error("Error sending webhook:", error);
    }
};