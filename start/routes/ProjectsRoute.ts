import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/', 'ProjectsController.showProjectsEdge')
    Route.get('/:id', 'ProjectsController.showProjectEdge')
}).prefix('projects')