// Classes

export class ImageModel {
    name: string = "";
    dataUrl: string = "";
    file: any;
}

export class UserModel {
    cloudLink?: string;
    creditsAmount?: number;
    cutType: string = "complete";
    email?: string;
    guidelines?: any;
    licensePlateRemoval: string = "true";
    locations?: any;
    name?: string;
    overlayImage?: any;
    paddingId?: string;
    resolution?: string;
    sceneId?: string;
    sceneIdInShowrooms?: boolean;
    token: string = "";
}

// Interfaces

export interface Showroom {
    name: string;
    url: string;
}


