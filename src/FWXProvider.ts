import { providers } from "ethers";

export enum ProviderType {
    WS,
    HTTP
}

export class FWXHTTPProvider extends providers.JsonRpcProvider {

}

export class FWXWSProvider extends providers.WebSocketProvider {

}

export function getProvider(url: string, type: ProviderType) {
    switch (type) {
        case ProviderType.HTTP:
            // fwx provider, ethers provider
            return [new FWXHTTPProvider(url), new providers.JsonRpcProvider(url)];
        case ProviderType.WS:
            return [new FWXWSProvider(url), new providers.WebSocketProvider(url)];
    }
}