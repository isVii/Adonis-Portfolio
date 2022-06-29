import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ApiAuth {
  public async handle({request, response}: HttpContextContract, next: () => Promise<void>) {
    const apiKey = request.header('API-Key')

    if (apiKey !== process.env.APIKey) {
        response.status(403).send('Invalid API key')
        return false
    }

    await next()
  }
}
