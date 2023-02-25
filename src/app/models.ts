export interface Showroom {
    name: string;
    url: string;
}

export class ImageModel {
    name: string = "";
    dataUrl: string = "";
    generated?: string = "";
    file: any;
}