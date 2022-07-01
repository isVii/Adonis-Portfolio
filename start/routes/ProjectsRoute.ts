import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/', 'ProjectsController.showProjectsEdge').as('projects')
    Route.get('/:id', 'ProjectsController.showProjectEdge').as('project')
}).prefix('projects')
