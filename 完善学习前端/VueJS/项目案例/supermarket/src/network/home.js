import {request} from "@/network/request";

export function getHomeMultipleData() {
  return request({
    url: "/home/multidata",
  })
}
