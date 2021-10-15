import { AllArticlesPageTypes } from "../../@types/content/allarticles";

export interface PostProps {
    article: AllArticlesPageTypes.AllArticleDetailsType;
    link?: boolean;
}