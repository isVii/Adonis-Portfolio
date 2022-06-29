import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.group(() => {
        Route.post('/', 'ProjectsController.createProject')
        Route.get('/', 'ProjectsController.getProjectsJSON')
        Route.get('/:id', 'ProjectsController.getProjectJSON')
    }).prefix('projects')

    Route.group(() => {
        Route.post('/', 'CreationsController.createCreation')
        Route.get('/', 'CreationsController.getCreationsJSON')
        Route.get('/:id', 'CreationsController.getCreationJSON')
    }).prefix('creations')
}).prefix('api').middleware('APIAuth')