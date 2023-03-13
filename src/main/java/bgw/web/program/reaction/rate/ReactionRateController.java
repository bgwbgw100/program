package bgw.web.program.reaction.rate;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReactionRateController {

    @GetMapping("reaction")
    public String reactionRate(){
        return "reaction/rate/reactionRate";
    }
}
