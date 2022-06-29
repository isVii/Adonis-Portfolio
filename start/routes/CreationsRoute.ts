import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/', 'CreationsController.showCreationsEdge')
}).prefix('creations')