import {StoryblokStory} from 'storyblok-generate-ts'

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      cached_url?: string;
      linktype?: string;
      [k: string]: any;
    }
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface ButtonStoryblok {
  variant?: string;
  size?: string;
  label?: RichtextStoryblok;
  url?: MultilinkStoryblok;
  _uid: string;
  component: "button";
  [k: string]: any;
}

export interface ButtonGroupStoryblok {
  vertical_layout?: boolean;
  buttons?: any[];
  _uid: string;
  component: "button_group";
  [k: string]: any;
}

export interface HeaderStoryblok {
  lead?: any[];
  trail?: any[];
  headline?: any[];
  title?: any[];
  _uid: string;
  component: "header";
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface LinkStoryblok {
  text?: string;
  link?: MultilinkStoryblok;
  icon?: AssetStoryblok;
  _uid: string;
  component: "link";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: any[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface SectionStoryblok {
  vertical_layout?: boolean;
  content?: any[];
  _uid: string;
  component: "section";
  [k: string]: any;
}

export interface TextStoryblok {
  text?: RichtextStoryblok;
  _uid: string;
  component: "text";
  [k: string]: any;
}

export interface TitleStoryblok {
  text?: RichtextStoryblok;
  level?: string;
  _uid: string;
  component: "title";
  [k: string]: any;
}
