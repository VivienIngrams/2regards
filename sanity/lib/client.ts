// import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId, useCdn } from '../env'

// export const client = createClient({
//   apiVersion,
//   dataset,
//   projectId,
//   useCdn,
// })

import "server-only";
import {
  createClient,
  type ClientConfig,
  type QueryParams,
} from "@sanity/client";
import { projectId, dataset, apiVersion } from "../env";

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: false,

};

export const client = createClient(config);

export async function sanityFetch<QueryResponse>({
  query,
  qParams = {}, 
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    cache: "force-cache",
    next: { tags },
  });
}