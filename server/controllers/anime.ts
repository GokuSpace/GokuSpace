import models from '../models';

const anime = {
  all: (req, res) => {
    const payload = {anime: {}, characters: {}}
    models.anime.titles()
      .then(result => {
        payload.anime = result
        models.anime.characters()
        .then(result => {
          payload.characters = result
          res.status(200).send(JSON.stringify(payload))
        })
      })
      .catch(err => {
        console.error(err)
        res.sendStatus(402)
      })
  }
}

export default anime;