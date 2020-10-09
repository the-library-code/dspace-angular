
import { OpenaireBrokerTopicObject } from '../../core/openaire/models/openaire-broker-topic.model';
import {
  OpenaireBrokerTopicActions,
  OpenaireBrokerTopicActionTypes
} from './openaire-broker-topic.actions';

/**
 * The interface representing the OpenAIRE Broker topic state.
 */
export interface OpenaireBrokerTopicState {
  topics: OpenaireBrokerTopicObject[];
  processing: boolean;
  loaded: boolean;
  totalPages: number;
  currentPage: number;
  totalElements: number;
}

/**
 * Used for the OpenAIRE Broker topic state initialization.
 */
const openaireBrokerTopicInitialState: OpenaireBrokerTopicState = {
  topics: [],
  processing: false,
  loaded: false,
  totalPages: 0,
  currentPage: 0,
  totalElements: 0
};

/**
 * The OpenAIRE Broker Topic Reducer
 *
 * @param state
 *    the current state initialized with openaireBrokerTopicInitialState
 * @param action
 *    the action to perform on the state
 * @return OpenaireBrokerTopicState
 *    the new state
 */
export function openaireBrokerTopicReducer(state = openaireBrokerTopicInitialState, action: OpenaireBrokerTopicActions): OpenaireBrokerTopicState {
  switch (action.type) {
    case OpenaireBrokerTopicActionTypes.RETRIEVE_ALL_TOPICS: {
      return Object.assign({}, state, {
        processing: true
      });
    }

    case OpenaireBrokerTopicActionTypes.ADD_TOPICS: {
      return Object.assign({}, state, {
        topics: state.topics.concat(action.payload.topics),
        processing: false,
        loaded: true,
        totalPages: action.payload.totalPages,
        currentPage: state.currentPage,
        totalElements: action.payload.totalElements
      });
    }

    case OpenaireBrokerTopicActionTypes.RETRIEVE_ALL_TOPICS_ERROR: {
      return Object.assign({}, state, {
        processing: false,
        loaded: true,
        currentPage: 0
      });
    }

    default: {
      return state;
    }
  }
}
