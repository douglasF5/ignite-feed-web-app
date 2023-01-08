// USER DATA
export interface UserData {
  id: number;
  name: string;
  picture: string;
  role: string;
}

// POSTS CONTENT
interface Content {
  id: string;
  authorInfo: UserData;
  publishedAt: Date;
  content: string;
  clapsCount: number;
  isClapped: boolean;
}

export interface CommentInterface extends Content {}

export interface PostInterface extends Content {
  comments: CommentInterface[] | null;
}

// BUTTON OPTIONS
type VariantOptionKeys = string;

export interface VariantOptions {
  [key: VariantOptionKeys]: string;
};

export interface VariantClassesList {
  [key: string]: {
    [key: string]: string;
  };
};

// ICONS
export interface IconProps extends SVGProps<SVGSVGElement> {
  iconColor?: string;
  size?: number;
}

// DELTE DIALOG
interface DeleteDialogDataObject {
  postId: string;
  commentId: string;
}