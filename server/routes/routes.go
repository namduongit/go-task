package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"

	controllers "github.com/namduongit/go-task/controller"
)

func RegisterRoutes(r *gin.Engine) {
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Hello from Go server",
		})
	})

	// Allow Controller
	r.POST("/auth/login", controllers.Login)
	r.POST("/auth/register", controllers.Register)
}
