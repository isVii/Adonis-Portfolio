import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/', 'CreationsController.showCreationsEdge')
    Route.post('/', 'CreationsController.createCreation')
}).prefix('creations')