import { GET_ANIME_PAGE } from './queries';
import { apolloClient } from './../../graphql/index';
import { GetAnimePage } from './__generated__/GetAnimePage';
class AnimeService {
    async getAnimePage(page: number, perPage = 5): Promise<GetAnimePage["Page"]> {
        try {
            const response = await apolloClient.query({
                query: GET_ANIME_PAGE, variables: { page, perPage }
            })

            if (!response || !response.data)
                throw new Error("cannot get anime list!")

            console.log("data:", response.data)
            return response.data.Page

        } catch (error) {
            throw error

        }

    }
}


export default new AnimeService();
