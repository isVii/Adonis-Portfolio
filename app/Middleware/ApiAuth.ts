import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ApiAuth {
  public async handle({request, response}: HttpContextContract, next: () => Promise<void>) {
    const apiKey = request.header('API-Key')

    if (apiKey !== process.env.APIKey) {
        response.status(401).send('API-Key was invalid')
        return false
    }
    
    await next()
  }
}
