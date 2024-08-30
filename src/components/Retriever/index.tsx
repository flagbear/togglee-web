import * as React from "react"
import { useEffect, useState } from "react"
import { Octokit } from "octokit"
import { uuid } from "@site/src/helpers/uuid"

export const Retriever = ({changeData, data}: any) => {
    const [fileUrl, setFileUrl] = useState('')
    const [token, setToken] = useState('')
    useEffect(() => {
        setFileUrl(localStorage.getItem('fileUrl') || '')
        setToken(localStorage.getItem('token') || '')
      }, []);
    const setData= async () => {
        const gistRegex = /https:\/\/gist.github.com\/.+\/(.+)#file-(.+)/
        if(!gistRegex.test(fileUrl)) return
        const [_, gist_id, fileName] = fileUrl.match(gistRegex) as string[];
        const octokit = new Octokit({ auth: token });
        await octokit.rest.gists.update({
            gist_id,
            files:{
                [fileName]: {
                    content: JSON.stringify(data, undefined, 4)
                }
            }
        });
    }
    const getData = async () => {
        const gistRegex = /https:\/\/gist.github.com\/.+\/(.+)#file-(.+)/
        if(!gistRegex.test(fileUrl)) return
        const match = fileUrl.match(gistRegex) as string[];
        const octokit = new Octokit({ auth: token });
        const {
        data: {files},
        } = await octokit.rest.gists.get({
            gist_id: match[1]
        });
        const content: any = JSON.parse(files[match[2]]?.content).toggles;
        const mappedToggles = content.map((toggle: any) => ({...toggle, key: uuid()}));
        changeData('toggles',mappedToggles);
    }
  return (<div style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: '1rem 0', 
    flexWrap: 'wrap',
    width: '100%'
  }}>
    <input type="text" style={{margin: '5px', flexGrow: 4}} placeholder="File Url" value={ fileUrl } onChange={(event) => {
        localStorage.setItem('fileUrl', event.target.value)
        setFileUrl(event.target.value)
    }} required/>
    <input style={{ margin: '5px', flexGrow: 2 }} type="password" placeholder="Personal Access Token" value={ token } onChange={(event) => {
        localStorage.setItem('token', event.target.value)
        setToken(event.target.value)
    }} required/>
    <div style={{ margin: '5px' }}>
        <button className="button button--primary" onClick={getData}>
        <i className="fa fa-download"></i>
        </button>
        <button style={{ marginLeft: '10px' }} className="button button--primary" onClick={setData}>
        <i className="fa fa-upload"></i>
        </button>
    </div>
  </div>)
}