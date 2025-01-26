import type { Tag } from "./tag";
import type { TeamMembership } from "./teammembership";
import type { User } from "./user";

export type ArticleJson = {
    stocks_count: number;
    rendered_body: string,
    body: string,
    coediting: boolean,
    comments_count: number,
    created_at: string,
    group: string,
    id: string,
    likes_count: number,
    private: boolean,
    reactions_count: number,
    tags: Tag[],
    title: string,
    updated_at: string,
    url: string,
    user: User,
    page_views_count: number,
    team_membership: TeamMembership,
    organization_url_name: string,
    slide: boolean,
};