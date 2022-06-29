import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/', 'ProjectController.showProjectsEdge')
    Route.get('/:id', 'ProjectsController.showProjectEdge')
}).prefix('projetcts')