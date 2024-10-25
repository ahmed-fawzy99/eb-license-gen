import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import logger from "https://deno.land/x/oak_logger/mod.ts";

const router = new Router();
router
    /*
    ** This endpoint will be used to check if the service is running
    */
    .get("/service-health", (context) => {
        context.response.body = JSON.parse('{"status": "HEALTHY"}');
    })
    /*
    ** This endpoint will be used to check if the product is available with certain quantity
    ** @param id: Product ID
    ** @param plan-id: Plan ID
    ** @param qty: Quantity
    */
    .get("/product/:id/:plan-id/:qty", (context) => {
        /*
         * Your logic here to check if the product is available with the given quantity
         */

        // If product is available with the given quantity:
        context.response.body = JSON.parse('{"status": "OK"}');

        // If product is not available with the given quantity:
        // context.response.body = JSON.parse('{"status": "NOT_OK"}');
        // context.response.status = 404;
    })

    /*
    ** This endpoint will be used to get a license key for the product
    ** @param id: Product ID
    ** @param plan-id: Plan ID
    ** @param qty: Quantity
    */
    .get("/product/:id/:plan-id/:qty", (context) => {
        /*
         * Your logic here to check if the product is available with the given quantity
         */

        // If product is available with the given quantity:
        context.response.body = JSON.parse('{"status": "OK"}');

        // If product is not available with the given quantity:
        // context.response.body = JSON.parse('{"status": "NOT_OK"}');
        // context.response.status = 404;
    })
    .get

;

const app = new Application();
app.use(logger.logger)
app.use(logger.responseTime)
app.use(router.routes());
app.use(router.allowedMethods());

// Set any unused port you want, just make sure web-server is redirecting to this port and it is open.
await app.listen({ port: 4242 });