import * as env from '../../_config'

export const query = async (db: string, require: string) => {
  const res = await fetch(`https://api.notion.com/v1/databases/${db}/query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${env.NOTION_KEY}`,
      'Notion-Version': '2022-06-28',
    },
    body: require
  })
  if (res.ok) return res.json()
  else console.error('err')
}

export const update = async (db: string, require: string) => {
  const res = await fetch('https://api.notion.com/v1/pages', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${env.NOTION_KEY}`,
      'NOTION-Version': '2022-06-28',
    },
    body: require
  })
  if (res.ok) return res.json()
  else console.error('err')
}

export const edit = async (id: string, require: string) => {
  const res = await fetch(`https://api.notion.com/v1/pages/${id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${env.NOTION_KEY}`,
      'NOTION-Version': '2022-06-28',
    },
    body: require
  })
  if (res.ok) return res.json()
  else console.error('err')
}

export const del = async (id: string) => {
  const res = await fetch(`https://api.notion.com/v1/blocks/${id}`,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${env.NOTION_KEY}`,
      'NOTION-Version': '2022-06-28',
    }
  })
  if (res.ok) return res.json()
  else console.error('err')
}
