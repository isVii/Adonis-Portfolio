import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.group(() => {
        Route.post('/', 'ProjectsController.createProject').middleware('APIAuth')
        Route.get('/', 'ProjectsController.getProjectsJSON').middleware('APIAuth')
    }).prefix('projects')

    Route.group(() => {
        Route.post('/', 'CreationsController.createCreation').middleware('APIAuth')
        Route.get('/', 'CreationsController.getCreationsJSON').middleware('APIAuth')
    }).prefix('creations')
}).prefix('api')