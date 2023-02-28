// Classes

export class ImageModel {
    name: string = "";
    dataUrl: string = "";
    generated?: string = "";
    file: any;
}

export class UserModel {
    cutType: string = "complete";
    email?: string;
    licensePlateRemoval: string = "true";
    name?: string;
    sceneId?: string ;
    token: string = "";
}

// Interfaces

export interface Showroom {
    name: string;
    url: string;
}


