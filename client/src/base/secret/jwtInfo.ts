export const jwtHeaderLenBase = 3
export const jwtHeaderLenVali = 5

export const decodeJwtFromServer = (jwtFromServer: string | undefined, headerLen: number) => {
  if (!jwtFromServer) {
    return {
      header: '',
      jwtBody: ''
    }
  }
  const header = jwtFromServer.slice(0, headerLen)
  const jwtBody = jwtFromServer.slice(headerLen, jwtFromServer.length)

  return {header, jwtBody}
}

export const encodeJwtFromClient = (header: string, jwtBody: string) => {
  return header + jwtBody + header
}
