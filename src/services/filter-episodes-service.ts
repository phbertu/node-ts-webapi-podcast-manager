import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcast-repository"
import { PodcastTransferModel } from "../model/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (podcastName: String | undefined): Promise<PodcastTransferModel> => {

  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: []
  }

  const queryString = podcastName?.split("?p=")[1] || ""
  const data = await repositoryPodcast(queryString)
  
  responseFormat.statusCode = data.length != 0 ? StatusCode.OK : StatusCode.NoContent;

  responseFormat.body = data;

  return responseFormat;
}